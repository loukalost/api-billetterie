# API RESTful Billetterie de concerts

## Lancer le projet

```bash
npm install
npm run start
```

## Tests

```bash
curl localhost:3000
```

## API

### Concerts

#### GET /concerts

Retourne tous les concerts

#### GET /concerts/:id

Retourne le concert avec l'id donné

### Reservations

#### POST /reservations

Crée une reservation

#### GET /reservations

Retourne toutes les reservations

#### GET /reservations/:id

Retourne la reservation avec l'id donné
