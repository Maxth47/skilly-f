#!/usr/bin/env bash
# Download all images from Limitless reference site
# URLs extracted from https://limitless.framer.photos/

set -e
BASE="https://framerusercontent.com/images"
OUT_DIR="public/images/limitless"
mkdir -p "$OUT_DIR"

# Normalize URL: strip &amp; and use first query or none for filename
download() {
  local url="$1"
  local name="$2"
  echo "Downloading $name ..."
  curl -sfL -o "$OUT_DIR/$name" "$url" || echo "  (failed)"
}

# From src= (page images)
download "${BASE}/0DzYDI0BJ4hmv3ZFOEoKCHNRads.png?scale-down-to=512&width=3424&height=1982" "hero-0DzYDI0BJ4hmv3ZFOEoKCHNRads.png"
download "${BASE}/3HdSKdJID82cm18YIfU2F5to.jpg?scale-down-to=512&width=840&height=500" "3HdSKdJID82cm18YIfU2F5to.jpg"
download "${BASE}/HHIrh9QRgM5it7trAH7fcZcn2NI.jpg?width=730&height=634" "HHIrh9QRgM5it7trAH7fcZcn2NI.jpg"
download "${BASE}/IHfks8oJ30AQUhgh03QgUwHIA.png?scale-down-to=512&width=3422&height=1914" "IHfks8oJ30AQUhgh03QgUwHIA.png"
download "${BASE}/JpaqrzL88okqjP21h9uM2ruGJ4A.png?scale-down-to=512&width=800&height=600" "JpaqrzL88okqjP21h9uM2ruGJ4A.png"
download "${BASE}/M2aqRkcDBti4UtcNvjmYLwZUOfo.png?scale-down-to=512&width=3416&height=1910" "M2aqRkcDBti4UtcNvjmYLwZUOfo.png"
download "${BASE}/OeUMJwP5hOLQ8dVue2LqSYO5os.jpg?width=2048&height=2048" "OeUMJwP5hOLQ8dVue2LqSYO5os.jpg"
download "${BASE}/UR1d2u9WH5HccJP03bKTSY1FDQ.png?scale-down-to=512&width=3426&height=1984" "UR1d2u9WH5HccJP03bKTSY1FDQ.png"
download "${BASE}/XiJDuh3df47NsYBH2QkYL99f3A.svg" "XiJDuh3df47NsYBH2QkYL99f3A.svg"
download "${BASE}/XyWulADII4hpinSHIR6UhpNubbo.jpg?scale-down-to=512&width=5040&height=2632" "XyWulADII4hpinSHIR6UhpNubbo.jpg"
download "${BASE}/aCNiceGIrEoe5X35haWm4Ar1uo.jpg?scale-down-to=512&width=884&height=500" "aCNiceGIrEoe5X35haWm4Ar1uo.jpg"
download "${BASE}/crpV6RKC6FWLT71lCtgSSST0.png?scale-down-to=512&width=2000&height=1500" "crpV6RKC6FWLT71lCtgSSST0.png"
download "${BASE}/gqUP80LGUOINQjhhLeYEzXe6G44.jpg?width=1024&height=683" "gqUP80LGUOINQjhhLeYEzXe6G44.jpg"
download "${BASE}/jyNE2GeNnp9aMJcnE6tpf72YE.png?scale-down-to=512&width=5032&height=2634" "jyNE2GeNnp9aMJcnE6tpf72YE.png"
download "${BASE}/k2CV27IWDWGxHRdsQZnVNllkPW0.png?scale-down-to=512&width=5040&height=2634" "k2CV27IWDWGxHRdsQZnVNllkPW0.png"
download "${BASE}/v6Mszk3RrZhyQSqyf901fkxHDRg.jpg?scale-down-to=512&width=884&height=500" "v6Mszk3RrZhyQSqyf901fkxHDRg.jpg"
# From href (favicon, og, etc.)
download "https://framerusercontent.com/images/AAwSuugmMv3rKrLmZa3T2tvUDVI.png" "favicon.png"
download "https://framerusercontent.com/images/zp360aBeLFCROVHFQUn7Psrk4.jpg" "zp360aBeLFCROVHFQUn7Psrk4.jpg"

echo "Done. Images in $OUT_DIR"
