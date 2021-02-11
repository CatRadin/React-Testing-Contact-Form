import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import ContactForm from "./ContactForm"

// test("renders without errors", () => {
//     render(<ContactForm />)
// });

test("form is filled out and submit adds info at bottom", () => {
    //render
    render(<ContactForm />)

    //query for all inputs
const  firstNameInput = screen.getByPlaceholderText(/edd/i)
const  lastNameInput =screen.getByPlaceholderText(/burke/i)
const  emailInput =screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
const  messageInput =screen.getByLabelText(/message/i)

    //type into inputs---- with userEvent
    userEvent.type(firstNameInput, "cat")
    userEvent.type(lastNameInput, "schneider")
    userEvent.type(emailInput, "catherineradin@yahoo.com")
    userEvent.type(messageInput, "hello")

    //query for the button
const button = screen.getByTitle(/submit/i)

    //click the button
// userEvent.click(button)

// query for the text tiger 

// const tigerText = screen.queryByText(/tiger/i)

    //assert --- expect!!
// expect(tigerText).toBeInTheDocument()
})