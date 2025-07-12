#!/usr/bin/env bash

sourceLoc=$1
version=$2
pluginTarget=$3
cd ~/applications/fiji/ || exit
./fiji --update remove-update-site fiji-plugins-local
./fiji --update update
./fiji --update add-update-site fiji-plugins-local "file:$pluginTarget" "file:" "$pluginTarget"
rm plugins/fiji-plugins-*.jar
cp "$sourceLoc/fiji-plugins-$version.jar" plugins/
./fiji --update upload --update-site fiji-plugins-local "plugins/fiji-plugins-$version.jar"
./fiji --update remove-update-site fiji-plugins-local
rm plugins/fiji-plugins-*.jar
