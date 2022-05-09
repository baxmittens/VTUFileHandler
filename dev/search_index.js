var documenterSearchIndex = {"docs":
[{"location":"#VTUFileHandler.jl","page":"Home","title":"VTUFileHandler.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A VTU library in the Julia language that implements an algebra for basic mathematical operations on VTU data.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"With increasing computing resources, investigating uncertainties in simulation results is becoming an increasingly important factor. A discrete numerical simulation is computed several times with different deviations of the input parameters to produce different outputs of the same model to analyze those effects. The relevant stochastic or parametric output variables, such as mean, expected value, and variance, are often calculated and visualized only at selected individual points of the whole domain. This project aims to provide a simple way to perform stochastic/parametric post-processing of numerical simulations on entire domains using the VTK unstructured grid (VTU) file system and the Julia language as an example.","category":"page"},{"location":"#Install","page":"Home","title":"Install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"import Pkg\nPkg.add(url=\"https://github.com/baxmittens/VTUFileHandler.jl.git\")","category":"page"},{"location":"#Preliminaries","page":"Home","title":"Preliminaries","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The VTUFileHandler will eventually be used to perform stochastic post-processing on large VTU result files. Therefore, the following assumptions have to be fulfilled for the software to work correctly:","category":"page"},{"location":"","page":"Home","title":"Home","text":"The VTU file must be in binary format and, in addition, can be Zlib compressed.\nOperators can only be applied to VTU files sharing the same topology. The user must ensure that this condition is met.\nThe data type of numerical fields of the VTU file, for which operators should be applied, have to be Float64.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The VTUFileHandler implements a basic VTU reader and writer through the functions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"function VTUFile(file::String) ... end \nfunction Base.write(vtu::VTUFile, add_timestamp=true) ... end","category":"page"},{"location":"","page":"Home","title":"Home","text":"By default, a timestamp is added if VTU files are written to disk not to overwrite existing files. Only data fields that are registered by the function ","category":"page"},{"location":"","page":"Home","title":"Home","text":"function set_uncompress_keywords(uk::Vector{String}) ... end","category":"page"},{"location":"","page":"Home","title":"Home","text":"before reading the VTU file are uncompressed and can be altered. For applying math operators onto a data field, the associated field has to be registered by the function ","category":"page"},{"location":"","page":"Home","title":"Home","text":"function set_interpolation_keywords(ik::Vector{String}) ... end","category":"page"},{"location":"","page":"Home","title":"Home","text":"The following math operators are implemented:","category":"page"},{"location":"","page":"Home","title":"Home","text":"+(::VTUFile, ::VTUFile),+(::VTUFile, ::Number),\n-(::VTUFile, ::VTUFile),-(::VTUFile, ::Number),\n*(::VTUFile, ::VTUFile),*(::VTUFile, ::Number),\n/(::VTUFile, ::VTUFile),/(::VTUFile, ::Number),\n^(::VTUFile, ::Number)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In-place variations of the operators above are implemented as well.","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A three-dimensional cube with dimension (x,y,z) with 0<=x,y,z<=2 discretized by quadrilian elements with 27 points and 8 cells named vox8.vtu with a linear ramp in x-direction (f(x=0,y,z)=0, f(x=2,y,z)=0.8) as a result field termed xramp will be used as an example. The following set of instructions transform the result field from a linear ramp to a quadratic function in x-direction (displayed as a piecewise linear field due to the discretization):","category":"page"},{"location":"","page":"Home","title":"Home","text":"set_uncompress_keywords([\"xRamp\"]) # uncrompress data field xramp\nset_interpolation_keywords([\"xRamp\"]) # apply math operators to xramp\nvtu = VTUFile(\"vox8.vtu\"); # read the vtu\nvtu += vtu/4; # [0.0,...,0.8] -> [0.0,...,1.0]\nvtu *= 4.0; # [0,...,1.0] -> [0.0,...,4.0]\nvtu -= 2.0; # [0,...,4.0] -> [-2.0,...,2.0]\nvtu ^= 2.0; # [-2.0,...,2.0] -> [4.0,...,0.0,...,4.0]\nwrite(vtu)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Cube with initial result field (left). Cube with manipulated result field (right).\\label{fig:1})","category":"page"},{"location":"#Function-Documentation","page":"Home","title":"Function Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"VTUHeader\nVTUFile","category":"page"},{"location":"#VTUFileHandler.VTUHeader","page":"Home","title":"VTUFileHandler.VTUHeader","text":"VTUHeader(::Type{T},input::Vector{UInt8}) where {T<:Union{UInt32,UInt64}}\n\nComputes the VTUHeader based on the headertype and a Base64 decoded input data array.\n\nArguments\n\n::Type{T}: headertype, either UInt32 or UInt64\ninput::Vector{UInt8}: input data\n\n\n\n\n\n","category":"type"},{"location":"#VTUFileHandler.VTUFile","page":"Home","title":"VTUFileHandler.VTUFile","text":"VTUFile(name::String)\n\nloads a VTU file. Don't forget to set the proper fieldnames via set_uncompress_keywords and set_interpolation_keywords Example set_uncompress_keywords(\"temperature\",\"points\") set_interpolation_keywords(\"temperature\") vtufile = VTUFile(\"./path-to-vtu/example.vtu\");\n\nArguments\n\nname::String: path to vtu file\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"set_uncompress_keywords\nadd_uncompress_keywords\nset_interpolation_keywords\nadd_interpolation_keywords","category":"page"},{"location":"","page":"Home","title":"Home","text":"write(::VTUFile, ::Bool)","category":"page"},{"location":"#Base.write-Tuple{VTUFile, Bool}","page":"Home","title":"Base.write","text":"write(vtufile::VTUFile,add_timestamp::Bool=true)\n\nWrites a VTUFile to destination vtufile.name\n\nArguments\n\nvtufile::VTUFile: VTU file\nadd_timestamp::Bool: adds a timestamp to vtufile.name if add_timestamp==true\n\n\n\n\n\n","category":"method"}]
}
