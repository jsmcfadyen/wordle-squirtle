import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

const SCORE_ME_COMMAND = {
  name: 'wordle',
  description: 'Returns your wordle stats for the last 50 messages',
  type: 1,
}
const ALL_COMMANDS = [TEST_COMMAND, SCORE_ME_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);