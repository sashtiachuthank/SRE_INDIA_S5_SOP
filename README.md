## What is MKDOCS?

MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation. Documentation source files are written in Markdown, and configured with a single YAML configuration file

[Getting Started with MkDocs](https://www.mkdocs.org/getting-started/#installation)

Markdown syntax is easy to learn and it has just a few marks. A summary can be found in [Markdown Guide](https://www.markdownguide.org/basic-syntax/) or [Daring Fireball](https://daringfireball.net/projects/markdown/syntax).


## Usage

To get started with this repository:

| Action | URL | comments |
| --------------- | --------------- | --------------- |
| install VScode | https://code.visualstudio.com/download| For all OS |
| install Python 3.x | https://www.python.org/downloads/ | For all OS |
| instal github | sudo apt-get install git-all (Ubuntu) | For linux only| 
| Install GIT | https://git-scm.com/downloads | For all OS |
| Install MKDOCS | pip3 install mkdocs-material | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-material-extensions | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-exclude | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-table-reader-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-git-revision-date-localized-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-awesome-pages-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-git-authors-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-minify-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-glightbox | Use the command promt to execute this command |
| install the plugin| pip3 install mkdocs-minify-plugin | Use the command promt to execute this command |
| install the plugin| pip3 install neoteroi-mkdocs | Use the command promt to execute this command |
| Configure your git environment | git config --global user.name "Your_git_Username" | Use the command promt to execute this command |
| Configure your git environment |git config --global user.email "Your E-mail" | Use the command promt to execute this command |

1. Make sure you have mkdocs installed on your machine.

2. Clone this repository to your local machine: `git clone https://github.com/sashtiachuthank/SRE_INDIA_S5_SOP. It will create a folder called `SRE_INDIA_S5_SOP` with all the files need.

3. You you write your content in files inside the `content` directory. Take a look at the final site [https://github.com/sashtiachuthank/SRE_INDIA_S5_SOP](https://github.com/sashtiachuthank/SRE_INDIA_S5_SOP.git) and compare with the ones in this directory to get a 'jist' of how if should be structured.

4. After you finish you can check the final result using the following command on the terminal: `mkdocs serve`. It will provide you a link where you can click and see the final website in your browser (it is hosted locally)

5. Create the final files with the command: `mkdocs build`

6. Add and commit your files using git:
```
git add .
git commit -m 'you can add a message here, like added pages to faq, for example'
git push origin main
```
7. Push your files to the main repository: `mkdocs gh-deploy`

8. The site should be updated by now.

---

VSCODE Basics: https://code.visualstudio.com/docs/introvideos/basics

MKDOCS guide: https://www.mkdocs.org/getting-started/#installation

Initial Mkdocs course: https://www.youtube.com/watch?v=Q-YA_dA8C20


---
VS Code Tips

Change the VS Code Default Language: https://code.visualstudio.com/docs/getstarted/locales
