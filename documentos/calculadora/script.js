let res = document.querySelector('p#result')
let firstNumber = '',
    secondNumber = '',
    operation = ''

function AddNumber(value)
{
    if (UpdateCalc() == false)
    {
        firstNumber += value
        UpdateCalc()
    } else {
        secondNumber += value
        UpdateCalc()
    }
}

function Sum(result)
{
    operation = '+'
    if (VerifyNumbers() == true)
    {
        return result = Number(firstNumber) + Number(secondNumber)
    }
}

function Sub(result)
{
    operation = '-'
    if (VerifyNumbers() == true)
    {
        return result = Number(firstNumber) - Number(secondNumber)
    }
}

function Div(result)
{
    operation = '/'
    if (VerifyNumbers() == true)
    {
        return result = Number(firstNumber) / Number(secondNumber)
    }
}

function Mul(result)
{
    operation = '*'
    if (VerifyNumbers() == true)
    {
        return result = Number(firstNumber) * Number(secondNumber)
    }
}

function VerifyNumbers(areNumbers) // Verificando se os números estão corretos e depois setando true ou false
{
    if (firstNumber != '' && secondNumber != '') return areNumbers = true
    else return areNumbers = false
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
    } else 
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
}

function Result()
{

    if (operation == '+')
    {
        res.innerHTML = `${firstNumber} + ${secondNumber} = ${Sum(result)}`
    } else if (operation == '-')
    {
        res.innerHTML = `${firstNumber} - ${secondNumber} = ${Sub(result)}`
    } else if (operation == '/')
    {
        res.innerHTML = `${firstNumber} / ${secondNumber} = ${Div(result)}`
    } else if (operation == '*')
    {
        res.innerHTML = `${firstNumber} * ${secondNumber} = ${Mul(result)}`
    } 
}

