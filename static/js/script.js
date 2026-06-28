/* Theme toggle */
function toggleTheme() {
    document.body.classList.toggle("light");

    const btn = document.querySelector(".toggle");

    btn.textContent = document.body.classList.contains("light")
        ? "🌙"
        : "🌞";
}

/* Set theme icon on load */
window.addEventListener("load", () => {
    const btn = document.querySelector(".toggle");

    btn.textContent = document.body.classList.contains("light")
        ? "🌙"
        : "🌞";
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

/* Boot sequence */
const bootLines = [
  "[    0.000000] Linux version 6.6.0 (build@arch) SMP",
  "[    0.000000] Command line: root=/dev/sda1 rw quiet",
  "[    0.002114] ACPI: RSDP 0x00000000000F0420",
  "[    0.004881] BIOS-provided physical RAM map",
  "[    0.018220] Kernel command line parsed",
  "[    0.045331] usbcore: registered new interface driver",
  "[    0.120001] systemd[1]: systemd 255 running in system mode",
  "[    0.140992] systemd[1]: Mounting file systems...",
  "[  OK  ] Reached target System Initialization.",
  "[  OK  ] Reached target Multi-User System.",
  "[  OK  ] Startup finished in 1.84s."
];

const boot = document.getElementById("boot");

function shouldRunBoot() {
    const lastBoot = localStorage.getItem("boot_done");
    const now = Date.now();

    // 10 minute.
    const GAP = 1000 * 60 * 10;

    if (!lastBoot) return true;

    if (now - parseInt(lastBoot, 10) > GAP) {
        return true;
    }

    return false;
}

function markBootDone() {
    localStorage.setItem("boot_done", Date.now().toString());
}

function runBoot() {
    let i = 0;
    const inner = document.querySelector(".boot-inner");

    function next() {
        if (i >= bootLines.length) {
            setTimeout(() => {
                boot.classList.add("done");
                setTimeout(() => {
                    boot.remove();
                    markBootDone();
                }, 700);
            }, 300);
            return;
        }

        const line = document.createElement("div");
        line.className = "boot-line";
        line.textContent = bootLines[i++];

        inner.appendChild(line);

        setTimeout(next, 120 + Math.random() * 180);
    }

    next();
}

window.addEventListener("load", () => {
    const boot = document.getElementById("boot");

    if (!boot) return;

    if (!shouldRunBoot()) {
        boot.remove();
        return;
    }

    runBoot();
});
