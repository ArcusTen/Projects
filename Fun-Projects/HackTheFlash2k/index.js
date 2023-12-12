#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';

// console.log(chalk.bgGreen('hi Mom'));

let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function welcome()
{
    const rainbowTitle = chalkAnimation.rainbow('Who wants to Be the next theFlash2k ?? \n');

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgCyan('HOW TO PLAY THIS STUPID GAME YOU MAY ASK:')}
    I am a processor on your computer.
    If you get any question wrong I will leave you just like your ${chalk.bgMagentaBright('EX')}
    So be Careful ...
    `)
}

async function askName()
{
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Sorry I forgot to ask, what is your name? \n',
        default()
        {
            return 'Player';
        },
    })
    playerName = answers.player_name;
}

async function question_1()
{
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What is theFlash2k\'s favourite CTF Domain?? \n',
        choices: [
            'Misc',
            'Pwn',
            'Reversing',
            'Cryptography',
        ]
    })
    return handleAnswer(answers.question_1 == 'Reversing');
}


async function handleAnswer(isCorrect)
{
    const spinner = createSpinner(`Hmmm .... Lemme Check ...`).start();
    await sleep();

    if (isCorrect)
    {
        spinner.success({ text: `Thats Correct ${playerName}. I guess you know something about him 🧐`});
    }
    else
    {
        spinner.error({ text: `💀 Game Over, you lost ${playerName} 💀`});
        process.exit(1);
    }
}

async function question_2()
{
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What is theFlash2k\'s favourite Food?? \n',
        choices: [
            'Biryani',
            'Qorma',
            'Pizza/Burger',
            'Nehari',
        ]
    })
    return handleAnswer(answers.question_2 == 'Biryani');
}

async function question_3()
{
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'What is theFlash2k\'s favourite Linux Distro?? \n',
        choices: [
            'Debian',
            'Ubuntu',
            'Fedora',
            'Arch',
        ]
    })
    return handleAnswer(answers.question_3 == 'Arch');
}

function win_screen()
{
    console.clear();
    const msg = `Congratulations  ${playerName}  !!! \n You can become next theFlash2k`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}


await welcome()
await askName();
await question_1();
await question_2();
await question_3();
await win_screen();
