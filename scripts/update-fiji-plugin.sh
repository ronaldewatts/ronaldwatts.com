#!/usr/bin/env bash

#./update-fiji-plugin.sh ~/projects/fiji-projects/target ~/projects/ronaldwatts.com/public/fiji-plugins 1.0.0

sourceLoc=$1
pluginTarget=$2
version=$3
localPluginSite="uab-fiji-plugins-local"

cd ~/projects/ronaldwatts.com/applications/fiji/ || exit
rm plugins/uab-fiji-plugins-*.jar
./fiji --update remove-update-site "$localPluginSite"
./fiji --update update
./fiji --update add-update-site "$localPluginSite" "file:$pluginTarget" "file:" "$pluginTarget"
./fiji --update update
rm plugins/uab-fiji-plugins-*.jar
cp "$sourceLoc/uab-fiji-plugins-$version.jar" plugins/
./fiji --update upload --update-site "$localPluginSite" "plugins/uab-fiji-plugins-$version.jar"

