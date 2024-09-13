# Aplikacja Generator Faktur

## Cel projektu

Celem projektu było stworzenie aplikacji "Generator Faktur" w Angularze, która pozwala na dynamiczne tworzenie i zarządzanie pozycjami faktury oraz wyświetlanie podsumowania z informacjami o firmie pobranymi z backendu. Projekt miał na celu zaprezentowanie umiejętności w zakresie tworzenia aplikacji frontendowej z użyciem dobrych praktyk Angulara.

## Wymagania funkcjonalne i niefunkcjonalne

- Dynamiczna lista pozycji faktury z możliwością dodawania, edytowania i usuwania.
- Formularz walidowany z możliwością dodania pozycji zawierających:
  - **Nazwa:** wymagane pole, od 3 do 30 znaków.
  - **Ilość:** liczba całkowita, od 1 do 100.
  - **Cena:** liczba całkowita, od 1 do 1 000 000.
- Przycisk "Submit" aktywny cały czas, przekierowujący na stronę podsumowania.
- Strona podsumowania wyświetlająca:
  - Informacje o firmie z pliku `company.json` (dane pobierane z backendu).
  - Listę dodanych pozycji oraz ich całkowity koszt.
- Obsługa komunikatów błędów i stanów aplikacji, takich jak "Please add items" czy "No items".

## Technologie i narzędzia

- Angular v18 zoneless
- Node v20.16.1
- TypeScript v5.5
- Tailwind CSS (do szybkiego stylowania, w produkcyjnej wersji zastąpiony przez SCSS)
- Eslint (do lintowania kodu)
- Prettier (do formatowania kodu)

## Założenia programistyczne

- Aplikacja napisana zgodnie z dobrymi praktykami Angulara.
- Aplikacja nie korzysta z żadnych gotowych bibliotek zewnętrznych
- Zone.js został usunięty z projektu
- Aplikacja korzysta z experimental i dev preview API
- Aplikacja została przetestowana ręcznie na przeglądarkach Chrome, Edge, Firefox

## Struktura projektu

```
src/
|- app/
|  |- core/                     rdzeń aplikacji (serwisy, konfiguracja)
|  |- feature/                  funkcje główne aplikacji
|  |  |- invoice-form/          logika formularza faktury
|  |  |  |- components/         komponenty związane z formularzem
|  |  |- invoice-summary/       logika podsumowania faktury
|  |     |- components/         komponenty związane z podsumowaniem
|  |- models/                   modele danych
|  |- shared/                   współdzielone komponenty, dyrektywy, pipy
|  |- assets/                   zasoby statyczne, takie jak pliki JSON
```

## FAQ

### Dlaczego Tailwind CSS?

Tailwind CSS został wykorzystany do szybkiego prototypowania stylów. W rzeczywistych projektach używałbym SCSS dla lepszego zarządzania stylami i zachowania standardów projektowych.

## Uruchomienie wersji deweloperskiej

1. Zainstaluj zależności:

   ```bash
   npm install
   ```

2. Uruchom aplikację:

   ```bash
   ng serve
   ```

   Aplikacja będzie dostępna pod adresem `http://localhost:4200`.

## Plany rozwoju

- Pokrycie kody testami jednostkowymi
- Integracja z Web Storage API
