let res = document.querySelector('p#result')
let firstNumber = '',
    secondNumber = '',
    operation = '',
    canAddSecond = true

function AddNumber(value)
{
    if (UpdateCalc() == false)
    {
        firstNumber += value
        UpdateCalc()
    } else {
        if (canAddSecond)
        {
            secondNumber += value
            UpdateCalc()
        }
    }
}

function Sum()
{
    if (VerifyNumbers())
    {
        operation = '+'
        return result = Number(firstNumber) + Number(secondNumber)
    }
}

function Sub()
{
    if (VerifyNumbers())
    {
        operation = '-'
        return result = Number(firstNumber) - Number(secondNumber)
    }
}

function Div()
{
    if (VerifyNumbers())
    {
        operation = '/'
        return result = Number(firstNumber) / Number(secondNumber)
    }
}

function Mul()
{
    if (VerifyNumbers())
    {
        operation = 'x'
        return result = Number(firstNumber) * Number(secondNumber)
    }
}

function Sqr()
{
    operation = '√'
    canAddSecond = false
    return result = Math.sqrt(Number(firstNumber), Number(2))
}

function Pot()
{
    if (VerifyNumbers())
    {
        operation = '^'
        return result = Number(firstNumber) ** Number(secondNumber)
    }
}

function VerifyNumbers() // Verificando se os números estão corretos e depois setando true ou false
{
    if (firstNumber != '' || secondNumber != '') return  true
    else return false
}

function UpdateCalc()
{
    if (operation == '')
    {
        res.innerHTML = firstNumber
        return false 
    } else 
    {
        res.innerHTML = `${firstNumber} ${operation} ${secondNumber}`
        return true
    }
}

// Tirar o ultimo numero digitado
function DeleteNum()
{
    if (UpdateCalc() == false)
    {
        firstNumber = firstNumber.slice(0, -1)
        UpdateCalc()
    }
    else if (UpdateCalc() == true && secondNumber == '')
    {
        operation = ''
        canAddSecond = true
        UpdateCalc()
    }
    else 
    {
        secondNumber = secondNumber.slice(0, -1)
        UpdateCalc()
    }
}

function Clear()
{
    res.innerHTML = ''
    firstNumber = ''
    secondNumber = ''
    operation = ''
    canAddSecond = true
}

function Result()
{

    if (operation == '+')
    {
        res.innerHTML = `${firstNumber} + ${secondNumber} = ${Sum()}`
    } else if (operation == '-')
    {
        res.innerHTML = `${firstNumber} - ${secondNumber} = ${Sub()}`
    } else if (operation == '/')
    {
        res.innerHTML = `${firstNumber} / ${secondNumber} = ${Div()}`
    } else if (operation == 'x')
    {
        res.innerHTML = `${firstNumber} x ${secondNumber} = ${Mul()}`
    } else if (operation == '√')
    {
        res.innerHTML = `2${operation}${firstNumber} = ${Sqr()}`
    } else if (operation == '^')
    {
        res.innerHTML = `${firstNumber} ^ ${secondNumber} = ${Pot()}`
    }
}

