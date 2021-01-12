
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { Express } from "./model/primo-livello/express/Express";

export async function ServerExress() {

    const express = require('express')
    const app = express()

    app.all('/', function (req: Request, res: Response) {
        res.send('Hello World')
    });
    app.all('/attributi', function (req: Request, res: Response) {
        res.sendFile(__dirname + '/html/Home.html');
    })

    await app.listen(3000);
}