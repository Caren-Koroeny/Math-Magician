import { screen, fireEvent, render } from "@testing-library/dom";
import NumbersKeys from "../NumbersKeys";

test('Testing onClick events', () =>{
    render(<NumbersKeys />);
    const fireFullStop = screen.getByTestId("seven");
    fireEvent.click(fireFullStop);
    expect(screen.getByTestId("seven")).toHaveTextContent(7);
});
test('Testing onClick events', () =>{
    render(<NumbersKeys />);
    const fireFullStop = screen.getByTestId("six");
    fireEvent.click(fireFullStop);
    expect(screen.getByTestId("six")).toHaveTextContent(6);
});
test('Testing onClick events', () =>{
    render(<NumbersKeys />);
    const fireFullStop = screen.getByTestId("five");
    fireEvent.click(fireFullStop);
    expect(screen.getByTestId("five")).toHaveTextContent(5);
});