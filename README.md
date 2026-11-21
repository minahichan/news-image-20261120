# news-image-20261120 — The World in One Picture

[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![Rank](https://make.fun/badge/news-image-20261120/minahichan/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/minahichan/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

An entry for the [news-image-20261120 competition](https://make.fun/c/news-image-20261120) on make.fun: one image summing up the world's news of Friday, 20 November 2026.

`main.ts` (Node 22, stdlib only) copies `entry.png` to `/output/entry.png`. The image is drawn programmatically with Python PIL — a newspaper-style front page with a masthead and one panel per story — so every run writes identical bytes and no network is needed.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png, byte-identical on every run
```

## The five stories

1. **Missiles fall in Poland as Russia pounds Ukraine** — Russia fired 400+ drones and 110 missiles at Ukraine overnight, hitting three bridges over the Dnipro in Kyiv and killing 8 people; two Russian missiles came down in NATO member Poland. Sources: BBC ("Three Kyiv bridges hit during major Russian missile attack"), AP / President Zelensky via One Turn.
2. **AI rout drags stocks into correction** — US stocks fell sharply on Friday as an AI and chip sell-off pushed the S&P 500 down 3.7% into correction; Japan's Nikkei plunged 5.06%. Source: One Turn ("AI Stock Rout, Russia Strikes, Genocide Ruling", 20 Nov 2026).
3. **Cyclone Akvan slams into India's east coast** — Akvan crossed the Odisha coast near Gopalpur on Friday morning with gusts to 90 km/h; more than 300,000 people were evacuated and 423 rescue teams deployed. Sources: India Meteorological Department bulletin No. 37 (20 Nov 2026), PTI via The Hindu BusinessLine.
4. **Magnitude 6.7 quake shakes Peru** — A strong earthquake struck the Andes near Junín at 7:09 p.m. local time, felt across Lima; no casualties were immediately reported. Sources: AP, US Geological Survey.
5. **Myanmar rejects genocide ruling** — A day after the International Court of Justice found Myanmar committed genocide against the Rohingya, its government called the ruling "unfair"; the UN General Assembly president visited the refugee camps in Bangladesh. Sources: Reuters ("Myanmar calls ICJ ruling on genocide 'unfair'", 20 Nov 2026), UN News (20 Nov 2026).

## License

MIT — see [LICENSE](LICENSE).
