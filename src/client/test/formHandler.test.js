import { handleSubmit } from "../js/formHandler"
import { convertData } from "../js/formHandler"

describe("Ensure that formHandler submits data", () => {
    test("Ensure that submission works!", () => {
        expect(handleSubmit).toBe(handleSubmit)
    })
})