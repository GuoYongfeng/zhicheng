#! /bin/sh

cdir=`pwd`
conf_file="${cdir}/fis-conf.js"

if [ -f ${conf_file} ]
then
    cd ${cdir}
    echo "---开始编译---"
    if [ ! -z $1 ]&&[ $1 = "local" ]
    then
        ppear release -cmopd output
    else
        ppear release --domains -cmopd output
    fi
    echo "---编译结束---"
    echo "---开始打包---"
    tar -czf output.tar.gz output/
    echo "---打包结束---"
    echo "---删除output文件夹---"
    rm -rf output
else
    echo "文件[${conf_file}]不存在"
fi
