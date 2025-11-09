
{
  description = "Colheita Certa - Ambiente de desenvolvimento";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            nodePackages.pnpm
            git
            zip
          ];
          
          shellHook = ''
            echo "Colheita Certa - Ambiente de Desenvolvimento"
            echo ""
            echo "Comandos disponíveis:"
            echo "  pnpm dev       - Iniciar servidor de desenvolvimento"
            echo "  pnpm build     - Build para produção"
            echo "  make-zip       - Gerar ZIP com index.html, src/ e public/"
            echo ""
            
            make-zip() {
              echo "Gerando ZIP do projeto..."
              zip -r colheita-certa.zip index.html src/ public/ entrega.txt
              echo "ZIP gerado: colheita-certa.zip"
            }
            
            export -f make-zip
          '';
        };
      }
    );
}
