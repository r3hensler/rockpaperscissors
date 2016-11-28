import { Injectable } from '@angular/core';

@Injectable()
export class ComputerPlayerService {
    private _options: string[];

    constructor() {}

    set options(newOptions: string[]) {
        this._options = [...newOptions];
    }

    get answer(): string {
        let randIndex = Math.floor(Math.random() * this._options.length);
        return this._options[randIndex];
    }
}
