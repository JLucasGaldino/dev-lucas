{
  description = "Demo 1";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
        {
          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
            ];

            shellHook = ''
          echo ""
          echo "Welcome, Lucas"
          echo "Beginning environment with Node, Astro, DaisyUI, Tailwind, and Alpine.js"
          echo ""
        '';
          };
        });

}
