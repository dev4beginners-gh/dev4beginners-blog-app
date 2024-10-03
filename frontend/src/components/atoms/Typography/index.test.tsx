import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypographyWrapper from ".";
import React from "react";
import { TYPOGRAPHY_TEST_ID } from "@/utils/constants";

describe("TypographyWrapper Component", () => {
  it("renders the children text correctly", () => {
    render(<TypographyWrapper>Test Text</TypographyWrapper>);

    const textElement = screen.getByText("Test Text");
    expect(textElement).toBeInTheDocument();
  });

  it("applies the correct variant and color", () => {
    render(
      <TypographyWrapper variant="h6" color="primary">
        Test Variant and Color
      </TypographyWrapper>
    );

    const typographyElement = screen.getByText("Test Variant and Color");
    expect(typographyElement).toHaveClass("MuiTypography-h6");

    expect(typographyElement).toBeInTheDocument();
  });

  it("renders with default props if none are passed", () => {
    render(<TypographyWrapper>Default Props Test</TypographyWrapper>);

    const typographyElement = screen.getByText("Default Props Test");
    expect(typographyElement).toHaveClass("MuiTypography-body1");
    expect(typographyElement).toHaveStyle("color: inherit");
  });

  it("passes additional props correctly", () => {
    render(
      <TypographyWrapper data-testid={TYPOGRAPHY_TEST_ID} variant="subtitle1">
        Additional Props Test
      </TypographyWrapper>
    );

    const typographyElement = screen.getByTestId(TYPOGRAPHY_TEST_ID);
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent("Additional Props Test");
  });

  it("applies custom className", () => {
    render(
      <TypographyWrapper className="custom-class">
        Class Name Test
      </TypographyWrapper>
    );

    const typographyElement = screen.getByText("Class Name Test");
    expect(typographyElement).toHaveClass("custom-class");
  });
});
