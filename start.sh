#/bin/sh

cd docs
sh ../update.sh &
cd source
npm run serve -- --host 0.0.0.0
