import * as util from "gulp-util";

/**
 * Represents a parser that extracts dependency file paths from a file.
 */
interface IDependencyParser
{
    /**
     * Parses the specified file, returning the set dependency file paths on which it depends.
     * @param file The file for which dependencies should be returned.
     * @param encoding The name of the encoding used in the file.
     * @return The set of file paths on which the file depends.
     */
    getDependencyFilePaths(file: util.File, encoding: string): string[];
}

// TODO: Workaround for TypeScript limitation. See: https://github.com/Microsoft/TypeScript/issues/3914
export default IDependencyParser;