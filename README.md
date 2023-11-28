# Emulator Listener bug

## Reproduction steps

### Web with emulators

1. `cd listener_bug_web`
2. Start emulators with `firebase emulators:start --import ../emulator_data`
3. Run `npm i && node .`

Observed output (notice 2nd query fires twice):
```
Got items from query 1: 2
Got items from query 2: 2
Got items from query 2: 3
```

### Web in production mode

1. `cd listener_bug_web`
2. Start emulators with `firebase emulators:start --import ../emulator_data`
3. Comment out emulator connection (`index.js:15`)
4. Run `npm i && node .`

Observed output:
```
Got items from query 1: 2
Got items from query 2: 3
```

### Flutter with emulators

1. `cd listener_bug_flutter`
2. Start emulators with `firebase emulators:start --import ../emulator_data`
3. Run `flutter run` (choosing Chrome)

Observed output (notice 2nd query fires twice):
```
Got items from query 1: 2
Got items from query 2: 2
Got items from query 2: 3
```

### Flutter in production mode

1. `cd listener_bug_flutter`
2. Start emulators with `firebase emulators:start --import ../emulator_data`
3. Comment out emulator connection (`lib/main.dart:10`)
4. Run `flutter run`

Observed output:
```
Got items from query 1: 2
Got items from query 2: 3
```