import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Document renders", () => {
  test("renders h2 text", async () => {
    render(<App />);
    const element = screen.getByText(/british-english/i);
    expect(element).toBeInTheDocument();
  });

  test("input", async () => {
    render(<App />);
    const inputArea = screen.queryByTestId("inputArea");
    expect(inputArea).toBeInTheDocument();
  });

  test("button", async () => {
    render(<App />);
    const button = screen.queryByTestId("button");
    expect(button).toBeInTheDocument();
  });

  test("result span", async () => {
    render(<App />);
    const resultSpan = screen.queryByTestId("resultSpan");
    expect(resultSpan).toBeInTheDocument();
  });
});

describe("Input value", () => {
  test("updates on change", () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");

    fireEvent.change(inputArea, { target: { value: "123" } });
    expect(inputArea?.value).toBe("123");
  });
});

describe("Test error cases:", () => {
  test("Not-A-Number input", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: "Test text" } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("Invalid input, Not-a-Number!");
  });

  test("too long number", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 12345678 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "Too long number, please select between -9999999 and 9999999!"
    );
  });

  test("decimals", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 123.123 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("Invalid input, dont use decimals yet!");
  });
});

describe("Test conversions for number:", () => {
  test("0", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 0 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("zero");
  });

  test("7", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 7 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("seven");
  });

  test("18", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 18 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("eighteen");
  });

  test("42", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 42 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("forty-two");
  });

  test("101", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 101 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("one hundred and one");
  });

  test("111", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 111 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("one hundred and eleven");
  });

  test("122", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 122 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("one hundred and twenty-two");
  });

  test("1000", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1000 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("ten hundred");
  });

  test("1008", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1008 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("ten hundred and eight");
  });

  test("1101", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1101 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("eleven hundred and one");
  });

  test("1111", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1111 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("eleven hundred and eleven");
  });

  test("1999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("nineteen hundred and ninety-nine");
  });

  test("2001", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 2001 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("two thousand and one");
  });

  test("2112", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 2112 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("two thousand one hundred and twelve");
  });

  test("2122", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 2122 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "two thousand one hundred and twenty-two"
    );
  });

  test("17999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 17999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "seventeen thousand nine hundred and ninety-nine"
    );
  });

  test("20999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 20999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "twenty thousand nine hundred and ninety-nine"
    );
  });

  test("22999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 22999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "twenty-two thousand nine hundred and ninety-nine"
    );
  });

  test("100001", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 100001 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("one hundred thousand and one");
  });

  test("100011", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 100011 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe("one hundred thousand and eleven");
  });

  test("110011", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 110011 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "one hundred and ten thousand and eleven"
    );
  });

  test("010011", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: "010011" } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "Please dont start the number with a 0!"
    );
  });

  test("342251", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 342251 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
  });

  test("1300420", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 1300420 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "one million three hundred thousand four hundred and twenty"
    );
  });

  test("9999999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: 9999999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine"
    );
  });

  test("-9999999", async () => {
    render(<App />);

    const inputArea = screen.queryByTestId("inputArea");
    const button = screen.queryByTestId("button");
    const resultSpan = screen.queryByTestId("resultSpan");

    fireEvent.change(inputArea, { target: { value: -9999999 } });
    fireEvent.click(button);

    expect(resultSpan?.innerHTML).toBe(
      "minus nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine"
    );
  });
});
