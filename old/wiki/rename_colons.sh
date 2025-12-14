#!/bin/bash
find . -depth -name '*:*' | while IFS= read -r file; do
    dir=$(dirname "$file")
    base=$(basename "$file")
    newbase="${base//:/-}"
    newfile="$dir/$newbase"
    if [ "$file" != "$newfile" ]; then
        mv -v "$file" "$newfile"
    fi
done
