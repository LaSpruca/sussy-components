<svelte:options tag="sussy-tiddies" />

<script>
    export let fg = "#f66828";
    export let bg = "#111";
</script>

<div style="--primary: {fg}; --background: {bg}" class="tiddies">
    <div class="tiddie" />
    <div class="tiddie" />
</div>

<style lang="scss">
    $primary: var(--primary);
    $background: var(--background);

    .tiddies {
        background: $background;
        display: flex;
        flex: auto;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }

    .tiddie {
        max-width: 100%;
        padding-top: 50%;

        position: relative;
        border-radius: 60%;
        width: 100%;
        border: 5px solid $primary;
        clip-path: polygon(0 50%, 0 150%, 100% 150%, 100% 50%);
        animation: tiddies 1s cubic-bezier(0.96, 0.26, 0.73, 0.85) infinite;

        &:nth-of-type(2) {
            animation-delay: 500ms;
            animation: tiddies1 1s cubic-bezier(0.96, 0.26, 0.73, 0.85) infinite;
        }

        &::before {
            position: absolute;
            content: "";
            left: 50%;
            bottom: -10px;
            background: $primary;
            width: 8px;
            height: 8px;
            border-radius: 4px;
        }
    }

    @keyframes tiddies {
        0%,
        100% {
            transform: translateY(0) scaleY(1) rotateZ(-10deg);
        }
        50% {
            transform: translateY(-7px) translateX(1px) scaleY(0.95)
                rotateZ(5deg);
        }
        70% {
            transform: translateY(-12px) translateX(2px) scaleY(0.9)
                rotateZ(7deg);
        }
    }
    @keyframes tiddies1 {
        0%,
        100% {
            transform: translateY(0) scaleY(1) rotateZ(10deg);
        }
        50% {
            transform: translateY(-7px) translateX(-1px) scaleY(0.95)
                rotateZ(-5deg);
        }
        70% {
            transform: translateY(-12px) translateX(-2px) scaleY(0.9)
                rotateZ(-7deg);
        }
    }
</style>
