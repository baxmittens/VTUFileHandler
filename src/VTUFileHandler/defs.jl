interpolation_keywords = ["displacement","epsilon","pressure_interpolated","sigma","temperature_interpolated","\"displacement\"","\"epsilon\"","\"pressure_interpolated\"","\"sigma\"","\"temperature_interpolated\""]
uncompress_keywords = ["connectivity","offsets","bulk_node_ids","bulk_element_ids","Points","MaterialIDs","\"connectivity\"","\"offsets\"","\"bulk_node_ids\"","\"bulk_element_ids\"","\"Points\"","\"MaterialIDs\"","types","\"types\""]

struct VTUKeyWords
	interpolation_keywords::Vector{String}
	uncompress_keywords::Vector{String}
end

const vtukeywords = VTUKeyWords(interpolation_keywords,uncompress_keywords)

function set_uncompress_keywords(uk::Vector{String})
	vtukeywords.uncompress_keywords = uk
end

function set_interpolation_keywords(ik::Vector{String})
	vtukeywords.interpolation_keywords = ik
end