import { execSync } from 'child_process';

try {
  console.log('Installing dependencies with npm...');
  execSync('npm install', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}
