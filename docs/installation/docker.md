---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# With Docker

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu Linux">

1. Open a terminal.
2. Uninstall old Docker versions with the following command:
```bash
sudo apt-get remove docker docker.io containerd runc
```
3. Install Docker with the following command:
```bash
curl -fsSL https://get.docker.com | sudo bash
```
4. Install Docker Compose with the following commands:
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
5. Install Git with the following command:
```bash
sudo apt-get install git
```
6. Clone the OpenDocs Docker repository with the following command:
```bash
git clone https://github.com/opendocs-editor/docker.git ~/opendocs
```
7. Run the following commands to start the OpenDocs Docker containers:
```bash
cd ~/opendocs
docker-compose up -d
```
8. Open a new browser tab and navigate to [http://localhost:4500/](http://localhost:4500/).

</TabItem>
<TabItem value="macos" label="MacOS">

1. Open a terminal.
2. Install Docker Desktop by downloading the correct package for your CPU architecture.
- Amd64: [https://desktop.docker.com/mac/main/amd64/Docker.dmg](https://desktop.docker.com/mac/main/amd64/Docker.dmg)
- Arm64: [https://desktop.docker.com/mac/main/arm64/Docker.dmg](https://desktop.docker.com/mac/main/arm64/Docker.dmg)
3. Install Git with the following command:
```bash
brew install git
```
4. Clone the OpenDocs Docker repository with the following command:
```bash
git clone https://github.com/opendocs-editor/docker.git ~/opendocs
```
5. Run the following commands to start the OpenDocs Docker containers:
```bash
cd ~/opendocs
docker-compose up -d
```
6. Open a new browser tab and navigate to [http://localhost:4500/](http://localhost:4500/).

</TabItem>
<TabItem value="windows" label="Windows">

1. Install Docker Desktop from this installer:
- [https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
2. Install Git from this installer:
- [https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.2/Git-2.35.1.2-64-bit.exe](https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.2/Git-2.35.1.2-64-bit.exe)
3. Clone the OpenDocs Docker repository with the following command:
```cmd
git clone https://github.com/opendocs-editor/docker.git %HOMEPATH%\Desktop\opendocs
```
4. Run the following commands to start the OpenDocs Docker containers:
```cmd
cd %HOMEPATH%\Desktop\opendocs
docker-compose up -d
```
5. Open a new browser tab and navigate to [http://localhost:4500/](http://localhost:4500/).

</TabItem>
</Tabs>
