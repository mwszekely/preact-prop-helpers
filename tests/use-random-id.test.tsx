import { h } from "preact"
import { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import { useRandomId, useState } from "../src/index";
import { act } from "preact/test-utils"


export default function RandomId({ id, prefix }: { id?: string, prefix?: string }) {
  const { useRandomIdProps, useReferencedIdProps } = useRandomId({ prefix });

  return (
    <div>
      <label {...useReferencedIdProps("for")<JSX.HTMLAttributes<HTMLLabelElement>>({ for: id })}></label>
      <input {...useRandomIdProps({ id })} />
    </div>
  );
}


describe('RandomId', () => {
  it('should provide an ID with a prefix', () => {
    const wrapper = mount(<RandomId prefix={"TEST_PREFIX-"} />);
    expect(wrapper.find("input").prop("id")).toMatch(/^TEST_PREFIX-.*$/)
  });

  it('should provide a default prefix if none is provided', () => {
    const wrapper = mount(<RandomId />);
    expect(wrapper.find("input").prop("id")).toMatch(/^id-.*$/)
  });

  it('should provide a new ID prop for the label if one is not provided', () => {
    const wrapper = mount(<RandomId />);
    expect(wrapper.find("input").prop("id")).toBeTruthy();
  });

  it('should not provide a new ID prop for the label if one is provided', () => {
    const wrapper = mount(<RandomId id={"TEST_ID"} />);
    expect(wrapper.find("input").prop("id")).toBe("TEST_ID");
  });

  it("should set both the ID prop and the referenced prop to the same value", () => {
    const wrapper = mount(<RandomId />);
    const inputId = wrapper.find('input').prop("id");
    const labelFor = wrapper.find("label").prop("for");

    expect(inputId).toEqual(labelFor);
  });
});
