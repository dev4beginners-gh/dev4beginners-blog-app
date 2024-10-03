import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BenefitCard from ".";
import React from "react";
import { BENIFIT_CARD_TEST_ID } from "@/utils/constants";
describe("BenefitCard Component", () => {
  const mockCardProps = {
    icon: "icon.png",
    title: "Title",
    description: "Description",
    bgColor: "#f0f0f0",
  };

  it("should renders the BenefitCard with correct content", () => {
    render(<BenefitCard {...mockCardProps} />);

    const imgElement = screen.getByAltText("icon");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "icon.png");

    const titleElement = screen.getByText("Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Title");

    const descriptionElement = screen.getByText("Description");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent("Description");
  });

  it("should applies the correct background color", () => {
    const { container } = render(<BenefitCard {...mockCardProps} />);
    const cardElement = container.querySelector(".MuiCard-root");
    expect(cardElement).toHaveStyle(
      `background-color: ${mockCardProps.bgColor}`
    );
  });

  it("should applies the correct structure with MUI elements", () => {
    render(<BenefitCard {...mockCardProps} />);
    const cardElement = screen.getByTestId(BENIFIT_CARD_TEST_ID);
    const titleElement = screen.getByText("Title");
    const descriptionElement = screen.getByText("Description");

    expect(cardElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
