# NBP invest lookup for past years

This is CLI tool finds what was the best moment to invest money in gold.

Functionality available:
- Get data about the best time to invest in the past `nbp-serach-best-investment --invest=135000 --years=5`

## Usage
```bash
nbp-serach-best-investment

You must specify the command to run

nbp-serach-best-investment [options]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --invest   Amount of money to invest                       [number] [required]
  --years    Historical data in years to check               [number] [required]
```

## Installation

### Locally 
Used Node.js 18.x
- `yarn install`
- `npm link`
- `yarn dev-start --invest=135000 --years=5` or `nbp-serach-best-investment --invest=135000 --years=5` 

### Using Docker 
- `docker build -t nbp-serach-best-investment .`
- `docker run nbp-serach-best-investment --invest=135000 --years=5`

### Tests

- ``yarn test``

```bash 
yarn run v1.22.18
$ jest -config --all
 PASS  test/nbp-service.test.ts
 PASS  test/calculate-best-invest.test.ts
 PASS  test/helpes.test.ts

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.852 s, estimated 2 s
Ran all test suites.
✨  Done in 3.22s.
```


## CLI Output  
```bash
$ docker run nbp-serach-best-investment --invest=135000 --years=5
{
  bestBuy: { data: '2018-09-28', cena: 139.32 },
  bestSell: { data: '2022-03-09', cena: 295.77 },
  profit: 156.45,
  totalProfit: 151598.84
}
```





