import { useProxy } from "@lib/storage";
import { BunnyPlugin, installPlugin, plugins } from "@lib/plugins";
import settings from "@lib/settings";
import AddonPage from "@ui/settings/components/AddonPage";
import PluginCard from "@ui/settings/components/PluginCard";
import { Strings } from "@/lib/i18n";

export default function Plugins() {
    useProxy(settings)

    return (
        <AddonPage<BunnyPlugin>
            title={Strings.PLUGINS}
            fetchFunction={installPlugin}
            items={plugins}
            safeModeMessage={Strings.SAFE_MODE_NOTICE_PLUGINS}
            card={PluginCard}
        />
    )
}