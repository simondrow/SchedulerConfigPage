#!/bin/bash
. /etc/profile

set -e

pnpm i --registry "https://bnpm.byted.org/" --verbose

npm run deploy

echo ">>>>>>>>>>>>>>> build done <<<<<<<<<<<<<<<"
