import { ComponentChildren, h } from "preact"
import { mount } from 'enzyme';
import { useLayoutEffect } from "../src/index";
import { useEffect } from "../src/use-effect";
import { useBeforeLayoutEffect } from "../src/use-before-layout-effect";

// Primarily to test useBeforeLayoutEffect

export default function UseEffect({ onEffect, depth, children }: { depth: number, id?: string, prefix?: string, onEffect: (type: "e" | "le" | "ble", depth: number) => void, children?: ComponentChildren }) {
  //const {  } = useRandomId({ prefix });

  useBeforeLayoutEffect(() => { onEffect("ble", depth) }, []);
  useLayoutEffect(() => { onEffect("le", depth) }, []);
  useEffect(() => { onEffect("e", depth) }, []);

  return (
    <div>{children}</div>
  );
}


describe('useEffect, useLayoutEffect, useBeforeLayoutEffect', () => {
  it('should fire each effect type in the correct order', () => {
    const types: ("ble" | "le" | "e")[] = [];
    let types2 = "";
    const _wrapper = mount(<UseEffect prefix={"TEST_PREFIX-"} depth={0} onEffect={(type, _depth) => { types2 += type; types.push(type) }} />);
    expect(types2).toEqual("blelee");
    expect(types).toEqual(["ble", "le", "e"]);
  });

  it('should fire each effect type in the correct order even when nested', () => {
    const types: ("ble" | "le" | "e")[] = [];
    const _wrapper = mount(<UseEffect prefix={"TEST_PREFIX-"} depth={0} onEffect={(type, _depth) => { types.push(type) }}>
      <UseEffect prefix={"TEST_PREFIX-"} depth={1} onEffect={(type, _depth) => { types.push(type) }} />
    </UseEffect>);
    expect(types).toEqual(["ble", "ble", "le", "le", "e", "e"]);
  });
});
