import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function(alt, storage, storeName) {
    const finalStore = makeFinalStore(alt);

    try {
        alt.bootstrap(storage.get(storeName));
    }
    catch (e) {
        console.error('Failed to bootstrap data', e);
    }

    finalStore.listen(() => {
        // Allows you to set a flag on localStorage of debug = true
        // and clear browser data for the app
        if (!storage.get('debug')) {
            storage.set(storeName, alt.takeSnapshot());
        }
    });
}
