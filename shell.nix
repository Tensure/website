{  pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/550dab224a26ec25e20e82c0c8bfc764e01b772e.tar.gz") {} }:

with pkgs;

mkShell {
    nativeBuildInputs = [
        docker
        gitAndTools.gitFull
        jq
        rnix-lsp
        mysql57
        nodejs-16_x
        nodePackages.prettier
        nodePackages.yaml-language-server
        nodePackages.typescript-language-server
    ];

    PATH="${pkgs.nodePackages.typescript-language-server}/bin:${pkgs.nodePackages.prettier}/bin:$PATH";
}
