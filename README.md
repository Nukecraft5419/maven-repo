<div align="center">

  <img src="https://raw.githubusercontent.com/Nukecraft5419/maven-repo/refs/heads/main/logo.png" alt="Maven Repo Logo" height="256" />

  <h1>📦 Nukecraft5419 Maven Repository</h1>

  <em>Official personal Maven repository for hosting custom Java libraries, Spigot APIs, and Javadocs.</em>

  <br>

  <p>
    <a href="https://discord.nukecraft5419.com/">
      <img src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-plural_vector.svg" alt="discord-plural" height="64" style="margin-right: 5px;" />
    </a>
    <a href="https://x.com/Nukecraft5419">
      <img src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/twitter-singular_vector.svg" alt="twitter-singular" height="64" style="margin-right: 5px;" />
    </a>
    <img src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/built-with/java_vector.svg" alt="Java" height="64" style="margin-right: 5px;" />
    <img src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/built-with/gradle_vector.svg" alt="Gradle" height="64" style="margin-right: 5px;" />
  </p>

  <p>
    <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21" />
    <a href="https://repo.nukecraft5419.com/">
      <img src="https://img.shields.io/badge/Maven_Repo-Hosted-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white" alt="Maven Repo" />
    </a>
    <img src="https://img.shields.io/github/last-commit/nukecraft5419/maven-repo?style=for-the-badge&label=Last%20Update" alt="Last Update" />
    <img src="https://img.shields.io/github/repo-size/nukecraft5419/maven-repo?style=for-the-badge&label=Repo%20Size" alt="Repo Size" />
    <img src="https://img.shields.io/github/license/nukecraft5419/maven-repo?style=for-the-badge&color=blue&label=License" alt="License" />
  </p>
</div>

---

## 🚀 How to use

To use artifacts from this repository, add the following to your build configuration:

### 🐘 Gradle (Kotlin DSL)

```kotlin
repositories {
    mavenCentral()
    maven("https://repo.nukecraft5419.com/")
}
```

---

### 🐘 Gradle (Groovy)

```groovy
repositories {
    mavenCentral()
    maven { url 'https://repo.nukecraft5419.com/' }
}
```

---

### 📦 Maven

```xml
<repository>
    <id>nukecraft5419-repo</id>
    <url>https://repo.nukecraft5419.com/</url>
</repository>
```

---

## 📂 Repository Content

This repository follows the standard Maven structure. You can browse the available artifacts directly via the web interface or by navigating the directory tree on GitHub.

```text
Group ID: dev.nukecraft5419

Projects: NukeLexicon, and more coming soon.
```

---

## 🤝 Contributing

If you find any issues with the repository infrastructure or the web landing page, feel free to open an issue or a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <sub>Built with ❤️ by Nukecraft5419</sub>
</div>
