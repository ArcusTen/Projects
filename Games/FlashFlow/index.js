#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';

let playerName;

const sleep = (ms = 2700) => new Promise((r) => setTimeout(r, ms));

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
    return handleAnswer(answers.question_1 == 'Pwn');
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
            'Fast-Food',
            'Nehari',
        ]
    })
    return handleAnswer(answers.question_2 == 'Fast-Food');
}

async function question_3()
{
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'What is theFlash2k\'s favourite Place to go on a trip? \n',
        choices: [
            'Tokyo-Japan',
            'İstanbul-Turkey',
            'Rome-Italy',
            'Cairo-Egypt',
        ]
    })
    return handleAnswer(answers.question_3 == 'Tokyo-Japan');
}

async function question_4()
{
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'What is theFlash2k\'s favourite Linux Distro?? \n',
        choices: [
            'Debian',
            'Gentoo',
            'Fedora',
            'Arch',
        ]
    })
    return handleAnswer(answers.question_4 == 'Arch');
}

async function question_5()
{
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'What is theFlash2k\'s AAA Game?? \n',
        choices: [
            'GTA-V',
            'Ghost-of-Tsushima',
            'Far-Cry 5',
            'God-OF-War 5',
        ]
    })
    return handleAnswer(answers.question_5 == 'God-OF-War 5');
}

async function question_6()
{
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'What is theFlash2k\'s  favourite Sports?? \n',
        choices: [
            'Football',
            'Esports',
            'BasketBall',
            'Cricket',
        ]
    })
    return handleAnswer(answers.question_6 == 'Esports');
}

async function question_7()
{
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'Is theFlash2k Married?? \n',
        choices: [
            'Good Question ... Next',
            'Yes (Sorry Girls He is taken)',
            'Maybe 🧐',
            'No (US MOMENT)',
        ]
    })
    return handleAnswer(answers.question_7 == 'No (US MOMENT)');
}

async function question_8()
{
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Who is his Inspiration? \n',
        choices: [
            'ITAY C0HEN',
            'ETIZAZ MOHSIN',
            'PEPSI PU',
            'FLASH',
        ]
    })
    return handleAnswer(answers.question_8 == 'PEPSI PU');
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
await question_4();
await question_5();
await question_6();
await question_7();
await question_8();

await win_screen();
