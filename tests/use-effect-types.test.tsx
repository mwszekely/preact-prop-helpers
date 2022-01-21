import { ComponentChildren, h } from "preact"
import { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import { useLayoutEffect, useRandomId, useState } from "../src/index";
import { act } from "preact/test-utils"
import { useEffect } from "../src/use-effect";
import { useBeforeLayoutEffect } from "../src/use-before-layout-effect";

// Primarily to test useBeforeLayoutEffect

export default function UseEffect({ id, prefix, onEffect, depth, children }: { depth: number, id?: string, prefix?: string, onEffect: (type: "e" | "le" | "ble", depth: number) => void, children?: ComponentChildren }) {
  const { useRandomIdProps, useReferencedIdProps } = useRandomId({ prefix });

  useBeforeLayoutEffect(() => { onEffect("ble", depth) }, []);
  useLayoutEffect(() => { onEffect("le", depth) }, []);
  useEffect(() => { onEffect("e", depth) }, []);

  return (
    <div>{children}</div>
  );
}


describe('useEffect, useLayoutEffect, useBeforeLayoutEffect', () => {
  it('should fire each effect type in the correct order', () => {
    let types: ("ble" | "le" | "e")[] = [];
    let types2 = "";
    const wrapper = mount(<UseEffect prefix={"TEST_PREFIX-"} depth={0} onEffect={(type, depth) => { types2 += type; types.push(type) }} />);
    expect(types2).toEqual("blelee");
    expect(types).toEqual(["ble", "le", "e"]);
  });

  it('should fire each effect type in the correct order even when nested', () => {
    let types: ("ble" | "le" | "e")[] = [];
    const wrapper = mount(<UseEffect prefix={"TEST_PREFIX-"} depth={0} onEffect={(type, depth) => { types.push(type) }}>
      <UseEffect prefix={"TEST_PREFIX-"} depth={1} onEffect={(type, depth) => { types.push(type) }} />
    </UseEffect>);
    expect(types).toEqual(["ble", "ble", "le", "le", "e", "e"]);
  });
});
