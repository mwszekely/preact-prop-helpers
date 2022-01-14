import { h } from "preact"
import { mount } from 'enzyme';
import { useMergedProps } from "../src/index";

interface ClassNameTesterProps {
    lhsClass: string | null | undefined;
    rhsClass: string | null | undefined;
    lhsClassName: string | null | undefined;
    rhsClassName: string | null | undefined;

    callback: (result: string | null | undefined) => void;
}

export default function ClassNamesMerger({ lhsClass, lhsClassName, rhsClass, rhsClassName, callback }: ClassNameTesterProps) {
    const p = useMergedProps<HTMLDivElement>()({ class: lhsClass, className: lhsClassName }, { class: rhsClass, className: rhsClassName });

    callback(p.className);

    return <div {...p} />
}


describe('useMergedProps', () => {
    it('should have a className of undefined if all class name props are undefined', () => {
        let result: string | null | undefined;
        const callback = (r: string | null | undefined) => result = r;
        const wrapper = mount(<ClassNamesMerger lhsClass={undefined} lhsClassName={undefined} rhsClass={undefined} rhsClassName={undefined} callback={callback} />);
        expect(result).toBeUndefined();
    });
    it('should have a className of undefined if all class name props are null', () => {
        let result: string | null | undefined;
        const callback = (r: string | null | undefined) => result = r;
        const wrapper = mount(<ClassNamesMerger lhsClass={null} lhsClassName={null} rhsClass={null} rhsClassName={null} callback={callback} />);
        expect(result).toBeUndefined();
    });
    it('should not let null or undefined overwrite class or className', () => {
        let result: string | null | undefined;
        const callback = (r: string | null | undefined) => result = r;
        const wrapper = mount(<ClassNamesMerger lhsClass={"test-class"} lhsClassName={null} rhsClass={null} rhsClassName={undefined} callback={callback} />);
        expect(result.trim()).toBe("test-class");
    });
    it('should combine classes', () => {
        let result: string | null | undefined;
        const callback = (r: string | null | undefined) => result = r;
        const wrapper = mount(<ClassNamesMerger lhsClass={"c1"} lhsClassName={null} rhsClass={null} rhsClassName={"c2"} callback={callback} />);
        expect(result).toContain("c1");
        expect(result).toContain("c2");
    });
    it('should de-duplicate classes', () => {
        let result: string | null | undefined;
        const callback = (r: string | null | undefined) => result = r;
        const wrapper = mount(<ClassNamesMerger lhsClass={"c1"} lhsClassName={null} rhsClass={null} rhsClassName={"c1"} callback={callback} />);
        expect(result.trim()).toBe("c1");
    });
});
