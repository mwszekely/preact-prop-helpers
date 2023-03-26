import { mount } from 'enzyme';
import { createContext, RenderableProps } from "preact";
import { useContext, useState } from "react";
import { useLayoutEffect, useStableCallback } from "../src/index";
import { ManagedChildInfo, UseManagedChild, useManagedChildren } from "../src/use-child-manager";

// Primarily to test useBeforeLayoutEffect

interface M extends ManagedChildInfo<number> {
  mounting: boolean;
}

const ManagedChildContext = createContext<UseManagedChild<M>>(null!);
export default function UseManagedChildren({ children, reportCount }: RenderableProps<{ reportCount: (count: number) => void }>) {
  const onChildrenMountChange = useStableCallback((mounted: Set<number>, unmounted: Set<number>) => {
    console.log(`${mounted.size} children mounted, ${unmounted.size} children unmounted`);
    reportCount(mounted.size);
  });
  const { useManagedChild } = useManagedChildren<M>({ onChildrenMountChange })
  return (
    <ManagedChildContext.Provider value={useManagedChild} children={<div>{children}</div>} />
  );
}

function UseManagedChild({ index }: { index: number }) {
  const [mounting, setMounting] = useState(true);
  useLayoutEffect(() => { console.log(`Child #${index} mounted`); setMounting(false); return () => setMounting(true); }, []);
  const useManagedChild = useContext(ManagedChildContext);
  const _r: void = useManagedChild({ index, mounting });
}


describe('UseManagedChildren', () => {
  it('should fire each effect type in the correct order', async () => {
    let count = 0;
    let resolve: any;
    const promise = new Promise((res) => { resolve = res });
    const _wrapper = mount(
      <UseManagedChildren reportCount={(c) => { resolve(); count = c; }}>
        <UseManagedChild index={0} />
        <UseManagedChild index={1} />
        <UseManagedChild index={2} />
      </UseManagedChildren>
    );
    await promise;
    expect(count).toEqual(3);
  });
});
