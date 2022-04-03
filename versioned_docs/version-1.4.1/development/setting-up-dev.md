---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setting up a development environment

To get started with OpenDocs development, you need to have a development environment.
Click on the appropriate below for your operating system.

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu Linux">

1. Install the dependencies with the following commands:
```bash
# Install curl, wget, bash, gnupg, and git
sudo apt-get install -y curl wget bash git gnupg

# Install NVM
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Open a new terminal

# Install Node.js 16
nvm install 16
nvm use 16

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

</TabItem>
<TabItem value="mac" label="MacOS">

1. Install the dependencies with the following commands:
```bash
# Install Homebrew
xcode-select --install
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install curl, wget, bash, gnupg, and git
brew install curl wget bash git gnupg

# Install NVM
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Open a new terminal

# Install Node.js 16
nvm install 16
nvm use 16

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
```

</TabItem>
<TabItem value="windows" label="Windows">

1. Install WSL (Windows Subsystem for Linux) with the following commands:
```powershell
# Install WSL
wsl --install

# Reboot
```
2. Follow the instructions for Debian/Ubuntu Linux.

</TabItem>
</Tabs>
