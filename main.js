"use strict"
// Criou funções
const getProblem = () => document.getElementById('problem')
                                 .value = localStorage.getItem('problem') ?? 1000

const setProblem = (problemNumber) => localStorage.setItem('problem', problemNumber)


const solveProblem = async () =>  {
    const input = document.getElementById('input')
                          .value.split(/\r|\n/);
/* replace(/ +|\r|\n/g,' ').split(' ')*/

    const problemNumber = document.getElementById('problem').value
    setProblem (problemNumber)
    
    const {problem} = await import (`./problems/${problemNumber}.js`)
    console.clear();
    problem(input);

}

getProblem()
document.getElementById('solve').addEventListener('click', solveProblem)