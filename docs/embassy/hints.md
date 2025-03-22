---
unlisted: true
---

# Hints

:::danger STOP!
If you ended up here by mistake, do not proceed forward. **SPOILERS AHEAD!**
:::

## Hi, I am new here! - Hint 01

Try using the `info!` macro. It's syntax is identical to the one used by `print!` and `println!`, found in the standard library.

## Hi, I am new here! - Hint 02

The `wait_for_*` functions are particularly interesting. Try to figure out which one should you use.

## Hi, I am new here! - Hint 03

I know you can do it, give yourself a bit of a challenge.

## Sing your own tune - Hint 01

You will need to use the table in **Section 12.5.2. Programmer's Model** to figure out the PWM channel for the chosen pin. The function you will need to use the `pwm::Config`, to modify the `top` and `compare` registers' values and the `Pwm::new_output_X()` function, where `X` will be either `a` or `b`, depending on the pin's channel. The first argument will have to be the PWM slice of the pin, the second one the pin itself, and the third, the PWM config. To be able to reuse the config later, you can pass a clone to the function.

## Sing your own tune - Hint 02

```rust
/// Beats per minute.
const TEMPO: u64 = 100;
/// A whole note duration in milliseconds.
const WHOLE_NOTE: u64 = 4 * (60_000 / TEMPO)
/// The microcontroller clock frequency
const CLOCK_FREQ: u64 = 150_000_000;
/// PWM clock divider
const PWM_DIV: u64 = 64;
```

## Sing your own tune - Hint 03

`note_freq = cpu_freq / (divider * top)`

In order to configure the PWM output, you can use the default value, and change the `divider` filed of the `pwm::Config`. The code should look like this:

```rust
let buzzer_cfg = pwm::Config::default();
buzzer_cfg.divider = PWM_DIV.to_fixed();
let mut buzzer = pwm::Pwm::new_output_x(
    p.PWM_SLICEX,
    p.PIN_Y,
    buzzer_cfg.clone()
);
```

Where the `Y` is the pin number, and the slice number (`X`) and half (`x`) depend on the choice of pin.

For each note, you will need to change the PWM configuration. Take a look at the methods implemented for the [`Pwm`](https://docs.embassy.dev/embassy-rp/git/rp235xb/pwm/struct.Pwm.html) structure.

## The temperature is rising - Hint 01

RGB colors are represented as 3 bytes, one for each color channel. Red is `(255, 0, 0)` and blue is `(0, 0, 255)`. You will need to configure 3 PWM output pins, one for each of the three colors and wire them accordingly. For simplicity, you should set the top register to be `255`, and **because the LED is a common anode**, the control is *reversed*. So if I would like to produce a color that has `180` in the **red** channel, I need to set the compare register value to `75`(255 - 180).

To make the light fade from red to blue, you can simply interpolate between the two points at a regular interval (such as 10ms, for example), with a given step.

## The temperature is rising - Hint 02


