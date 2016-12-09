## Workflow z modułami ES6 i Webpack

Przygotuj swój własny workflow z użyciem Webpacka. Skonfiguruj to narzędzie tak, aby pozwalało na tworzenie kodu aplikacji z podziałem na moduły, importowane następnie z użyciem zapisu dostępnego w ramach ES6. Dodatkowo, wszystkie pliki powinny dawaćmożliwość pisania kodu JavaScript w ES6, a więc finalnie powinny być przez Webpacka kompilowane do standardu ES5, a następnie łączone w tzw. bundle. Kod JavaScript dla modułów może być dowolny i nie musi go być dużo. Istotą jest tutaj fakt, aby każdy modułzawierał jakąś prostą funkcjonalność i ją eksportował. W innym module można ją wtedy zaimportować, a także z niej skorzystać. Poprawnie przygotowany workflow powinien kompilować kod wszystkich modułów z ES6 do ES5, następnie łączyć je w jeden plik i minifikować. Plik ten finalnie wczytywany będzie w pliku index.html za pomocą odwołania <script src=“”></script>.

## Użycie

1. Instalacja webpack
    `npm install webpack -g`

2. Uruchomienie webpack `webpack watch`

3. Uruchomienie z webpack-dev-server `webpack-dev-server` pod adresem ` http://localhost:8080/webpack-dev-server/`

## Zawartość

* JS bundle
* SASS
* Autoprefixer
* Web-serwer
* JShint
* Kompilator ES6
