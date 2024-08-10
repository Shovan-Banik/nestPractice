import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    checkNow() {
        return ['1', '2', '3', '4']
    }
}
