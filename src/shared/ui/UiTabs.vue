<script lang="tsx">
import { defineComponent } from 'vue';
import UiTab from './UiTab.vue';

export default defineComponent({
    props: {
        active: {
            type: String,
            required: true,
        },
    },

    emits: {
        // eslint-disable-next-line func-names
        'update:active': function (tabID: string): boolean {
            return typeof tabID === 'string';
        },
    },

    methods: {
        setActive(tabID: string) {
            this.$emit('update:active', tabID);
        },
    },

    render() {
        const slottedTabs = this.$slots.default?.().filter((tab) => tab.type === UiTab);
        const activeTab = slottedTabs?.find((tab) => tab.props?.name === this.active);
        // @ts-ignore
        const activeTabContent = activeTab?.children?.default?.();

        // @ts-ignore
        const renderTabItem = (tab) => {
            const classes = `tabs__tab ${tab === activeTab && 'tabs__tab_active'}`;

            return (
                <a class={classes} role="tab" onClick={() => this.setActive(tab.props.name)}>
                    {tab.props.title}
                </a>
            );
        };

        return (
            <div class="tabs">
                <div class="tabs__nav" role="tablist">
                    {slottedTabs?.map(renderTabItem)}
                </div>
                <div class="tabs__content">{activeTabContent}</div>
            </div>
        );
    },
});
</script>

<style scoped>
.tabs {
    margin: 0;
}

.tabs__nav {
    display: flex;
    flex-direction: row;
    position: relative;
}

.tabs__nav:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--grey-2);
}

.tabs__tab {
    display: inline-flex;
    padding: 10px 0;
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    line-height: 28px;
    color: var(--grey-8);
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin-right: 18px;
    transition-duration: 0.2s;
    transition-property: border-color, color;
    box-shadow: none;
    background-color: transparent;
    outline: none;
    position: relative;
    z-index: 1;
}

.tabs__tab:hover,
.tabs__tab.tabs__tab_active {
    border-bottom-color: var(--blue);
    color: var(--blue);
}
</style>
