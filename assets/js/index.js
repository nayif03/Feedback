
const pass = document.getElementById("exampleInputPassword1")

pass.addEventListener("keyup", () => pass.value)

const message = document.getElementById("message")

message.addEventListener("keyup", () => message.value)

function resetValues() {
    pass.value = pass.defaultValue
    message.value = message.defaultValue
}

resetValues()

