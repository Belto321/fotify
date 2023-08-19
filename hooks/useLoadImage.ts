import { SupabaseClient, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

const useLoadImage = (song: Song) => {

    const supabaseCilent = useSupabaseClient();

    if(!song) {
        return null;
    }

    const { data: imageData } = supabaseCilent
        .storage.from('images')
        .getPublicUrl(song.image_path);

    return imageData.publicUrl;
};

export default useLoadImage;