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


describe('RandomId', () => {
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
  /*
    it('should provide a default prefix if none is provided', () => {
      const wrapper = mount(<UseEffect />);
      expect(wrapper.find("input").prop("id")).toMatch(/^id-.*$/)
    });
  
    it('should provide a new ID prop for the label if one is not provided', () => {
      const wrapper = mount(<UseEffect />);
      expect(wrapper.find("input").prop("id")).toBeTruthy();
    });
  
    it('should not provide a new ID prop for the label if one is provided', () => {
      const wrapper = mount(<UseEffect id={"TEST_ID"} />);
      expect(wrapper.find("input").prop("id")).toBe("TEST_ID");
    });
  
    it("should set both the ID prop and the referenced prop to the same value", () => {
      const wrapper = mount(<UseEffect />);
      const inputId = wrapper.find('input').prop("id");
      const labelFor = wrapper.find("label").prop("for");
  
      expect(inputId).toEqual(labelFor);
    });*/
});
