import style from "./features-section.module.scss"
import { ProgressBar } from "@/components/progress-bar/progress-bar";

export function FeaturesSection() {
  return (
    <section className={style.featuresSection}>
      <div className={style.contentDiv}>

        <h2>TIME TO DANCE</h2>

        <p>Are you tired of hearing about how silent EVs are? Do you crave drama and emotion? Then you must want a car
          like the SL55, whose powertrain is unashamedly unadulterated.</p>

        <p>Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes alive with a deep bark. Petrolheads
          within
          earshot can immediately tell that an eight-cylinder was just fired up. There&#39;s no mistaking this for any
          other type of engine.
        </p>
        <p>
          The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter figure from just 2,250rpm. Power is
          transferred to both axles through the Matic+ system with fully variable torque distribution, making this the
          first all-wheel drive SL.
        </p>
        <p>
          The most ideal mode for the SL55 is Individual, so you can customise attributes such as the engine, dampers,
          traction control, and exhaust. Setting the first two to &quot;Sport&quot; and the other two
          to &quot;Advanced&quot; and &quot;Powerful&quot; is about right. I also left the nine-speed automatic gearbox
          in
          manual mode.
        </p>

        <p>
          Right off the bat, the V8 eagerly shows how tractable and rev-happy it is. The engine, along with the exhaust,
          sounds glorious in second gear as the tachometer needle swings towards 7,000rpm. It gets real addictive real
          quick.
        </p>
        <p>
          The SL might be a sleek grand tourer, but it sounds like an American muscle car when driven hard. Emission
          regulations are calling for the internal combustion engine to be phased out, but this V8 is giving them two
          middle fingers while yelling back, &#39;Hell no, I won&#39;t go!&quot;
        </p>

        <p>
          Even while idling, the V8&#39;s pulsing is palpable. Depending how you flex your right foot, the exhaust will
          blare anything from low and throaty notes to a full-on throat-clearing roar. Conducting this orchestra is fun,
          and
          anticipating tunnels and underpasses is even more exciting.
        </p>

        <div className={style.videoWrapper}>
          <iframe
            width="560" height="315" src="https://www.youtube.com/embed/yeVKx-GIlbw?si=OFq3dKxXjtqWW4qZ"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
        </div>
        <p>
          Time seems to slow down in the SL55, despite its ability to get from rest to 100km/h in 3.9 seconds. The
          acceleration is great, but losing yourself in the drive is even better. Here, I momentarily forget about the
          outside world. Savouring the car&#39;s soul-stirring abilities are more important than meetings and deadlines.
        </p>

        <p>
          Show the SL a series of corners and it obliges your whims, with the steering wheel unexpectedly feeding back
          road
          undulations. The car&#39;s movements are progressive and natural. The ride, even in Sport, is pliant, yet
          accords
          enough body control on twistier paths.
        </p>
        <p>
          And when it comes to stopping, those dinner plate-size brake rotors give you plenty of confidence. The SL
          weighs
          nearly two tonnes, but it doesn&#39;t feel like it. Only when parking does the car annoy me. Rear-wheel
          steering
          is standard, but given the wide turning circle, I swear it doesn&#39;t work.
        </p>

        <p>
          The SL has nine speeds, but I only use four of them, as the motor&#39;s vocals at high rpms are addictive.
          Thus,
          with engine speeds remaining relatively high, a litre of unleaded allows me to cover just over two kilometres.
          Oops.
        </p>

        <p>
          After two decades, the SL has reverted to a fabric roof as it is lighter and takes up less boot space when
          opened.
          It can be opened and closed in 15 seconds while the car is driven at up to 60km/h.
        </p>

        <p>
          However, 15 seconds is only possible if the virtual toggle switch doesn&#39;t slip away from your finger. I
          often
          found myself having to re-swipe to operate the roof. Mercedes should have kept the metal switch of the
          previous
          car, which conveniently has the one-touch windows up/down toggle beside it.
        </p>

      </div>

      <ProgressBar />
    </section>
  )
}